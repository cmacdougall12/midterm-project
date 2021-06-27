DROP TABLE IF EXISTS todo_lists CASCADE;

CREATE TABLE todo_lists (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) DEFAULT NULL,
  description TEXT DEFAULT NULL,
  status BOOLEAN DEFAULT TRUE
);
