const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

const internData = {
  name: "Alex Intern",
  referralCode: "alex2025",
  totalDonations: 12345,
  rewards: ["T-Shirt", "Certificate", "Mentorship Session"]
};

const leaderboard = [
  { name: "Alex Intern", donations: 12345 },
  { name: "Sam Dev", donations: 9876 },
  { name: "Jamie Coder", donations: 7540 }
];

app.get('/api/intern', (req, res) => res.json(internData));
app.get('/api/leaderboard', (req, res) => res.json(leaderboard));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
