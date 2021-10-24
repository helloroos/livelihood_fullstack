class User < ApplicationRecord

    validates :email, :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true
    validates :password_digest, :first_name, :last_name, presence: true
    attr_reader :password
    after_initialize :ensure_session_token

    has_many :transfers,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Transfer

    has_many :orders, 
        primary_key: :id,
        foreign_key: :user_id, 
        class_name: :Order

    has_many :portfolio_values, 
        primary_key: :id,
        foreign_key: :user_id, 
        class_name: :PortfolioValue

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            return user
        end
        nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        self.password_digest = BCrypt::Password.create(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= generate_session_token
    end
end
