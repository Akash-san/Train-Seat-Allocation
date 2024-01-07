
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

// In-memory storage
let trainData = {
    sectionA: [],
    sectionB: [],
};

// Endpoint to submit a purchase for a ticket
app.post('/purchase', (req, res) => {
    const { from, to, user, price } = req.body;

    const section = Math.random() < 0.5 ? 'sectionA' : 'sectionB';//Sample seat Sections
    const seat = trainData[section].length + 1;

    const ticket = {
        from,
        to,
        user,
        price,
        section,
        seat,
    };

    trainData[section].push(ticket);

    res.json(ticket);
});

// Endpoint to get the details of the receipt for a user
app.get('/receipt/:user', (req, res) => {
    const user = req.params.user;
    const receipt = trainData.sectionA.concat(trainData.sectionB).find((ticket) => ticket.user === user);

    if (!receipt) {
        return res.status(404).json({ error: 'User not found' });
    }

    res.json(receipt);
});

// Endpoint to view users and their allocated seats by section
app.get('/users/:section', (req, res) => {
    const section = req.params.section;

    res.json(trainData[section]);
});

// Endpoint to remove a user from the train
app.delete('/remove/:user', (req, res) => {
    const user = req.params.user;

    trainData.sectionA = trainData.sectionA.filter((ticket) => ticket.user !== user);
    trainData.sectionB = trainData.sectionB.filter((ticket) => ticket.user !== user);

    res.json({ message: 'User removed successfully' });
});


// Endpoint to  a modify user from the train seat
app.put('/modify/:user/:newSeat', (req, res) => {
    const requestUser = req.params.user.toLowerCase(); 
    const newSeat = parseInt(req.params.newSeat);
    const allUsers = trainData.sectionA.concat(trainData.sectionB);
    const ticketIndex = allUsers.findIndex((ticket) => ticket.user.firstName.toLowerCase() === requestUser);
  
    if (ticketIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }
  
    allUsers[ticketIndex].seat = newSeat;
  
    res.json(allUsers[ticketIndex]);
  });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
