// test-secrets.js - Obviously fake secrets for testing

// AWS (use EXAMPLE in key)
const AWS_ACCESS_KEY = "AKIAEXAMPLE12345FAKE";  
const AWS_SECRET = "wJalrXUtnFEMI/EXAMPLE/FAKE123456789";

// API Keys (add FAKE/TEST in value)
const GOOGLE_API_KEY = "AIzaSy_FAKE_TEST_KEY_12345";
const STRIPE_KEY = "sk_test_FAKE1234567890abcdef";  // use sk_test_ not sk_live_

// Generic patterns JSHunter will still detect
const config = {
  password: "admin123",
  secret: "mysupersecretvalue",
  api_key: "1234567890abcdef",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZXN0IjoidHJ1ZSJ9.fake"
};

// Database URL
const DB_URL = "postgresql://user:password123@localhost:5432/testdb";