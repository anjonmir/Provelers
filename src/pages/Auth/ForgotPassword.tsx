.auth-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.auth-card {
  width: 360px;
  background: #1e1e1e;
  color: #fff;
  padding: 30px;
  border-radius: 8px;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
}

.auth-card h2 {
  margin-bottom: 5px;
}

.subtitle {
  font-size: 0.9rem;
  color: #bbb;
  margin-bottom: 20px;
}

.auth-card input {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  background: #2b2b2b;
  border: none;
  color: white;
}

.primary-btn {
  width: 100%;
  padding: 10px;
  background: #00b4d8; /* HTML version accent */
  border: none;
  font-weight: bold;
  cursor: pointer;
}

.primary-btn:hover {
  background: #0096c7;
}

.switch {
  margin-top: 15px;
  font-size: 0.85rem;
}

.switch a {
  color: #00b4d8;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 10px;
  background: none;
  border: none;
  color: #aaa;
  font-size: 1.2rem;
  cursor: pointer;
}
