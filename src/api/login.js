export default function handler(req, res) {
    const users = JSON.parse(process.env.USERS_DATA);
    const { username, password } = req.body;
  
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
  
    if (user) {
      return res.status(200).json({
        username: user.username,
        role: user.role,
      });
    } else {
      return res.status(401).json({ error: "Invalid credentials" });
    }
  }