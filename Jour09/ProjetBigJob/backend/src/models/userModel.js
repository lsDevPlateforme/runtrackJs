const db = require("../config/initdb");

const userModel = {
  createUser: (username, email, hashedPassword) => {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
      db.run(query, [username, email, hashedPassword], function (err) {
        if (err) {
          reject(err);
        } else {
          resolve({ id: this.lastID });
        }
      });
    });
  },

  findUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM users WHERE email = ?", [email], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  },

  findUserById: (id) => {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT users.*, user_dates.date_present, user_dates.authorize 
        FROM users 
        LEFT JOIN user_dates ON users.id = user_dates.user_id 
        WHERE users.id = ?
      `;
      db.all(query, [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          if (rows && rows.length > 0) {
            const user = {
              id: rows[0].id,
              username: rows[0].username,
              email: rows[0].email,
              password: rows[0].password,
              role: rows[0].role,
              dates: rows
                .map((row) => ({
                  date_present: row.date_present,
                  authorize: row.authorize,
                }))
                .filter((date) => date.date_present != null),
            };
            resolve(user);
          } else {
            resolve(null);
          }
        }
      });
    });
  },

  updateUserRole: (userId, newRole) => {
    console.log(userId, newRole);
    return new Promise((resolve, reject) => {
      db.run(
        "UPDATE users SET role = ? WHERE id = ?",
        [newRole, userId],
        function (err) {
          if (err) {
            reject(err);
          } else {
            resolve({ updated: this.changes });
          }
        }
      );
    });
  },

  findAllUsers: () => {
    return new Promise((resolve, reject) => {
      db.all("SELECT id, username, email, role FROM users", [], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  },
};

module.exports = userModel;
