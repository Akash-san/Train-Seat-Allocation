# Train Ticket Seat Allocation

A simple Node.js application that simulates a train ticket Allocation.

## Getting Started

### Installation

1.Clone the repository:
```
git clone https://github.com/Akash-san/Train-Seat-Allocation.git
```
Navigate to the project directory:
```
cd train-seat-allocation
```
2.Install dependencies:
```
npm install
```
### Running the Application

Start the Node.js server:
```
node index.js
```
The server will be running at http://localhost:4000.

## Usage

### Submit a Purchase

Create a POST request in Postman to http://localhost:4000/purchase.
Set the body as raw JSON and provide the purchase details.

```
{
  "from": "London",
  "to": "France",
  "user": {
    "firstName": "Akash",
    "lastName": "S",
    "email": "A@gmail.com"
  },
  "price": 20
}
```
### Get a Receipt
```
Create a GET request in Postman to http://localhost:4000/receipt/:user_id (replace :user_id with the actual user's name).
```
### View Users by Section
```
Create a GET request to http://localhost:4000/users/:section (replace :section with either sectionA or sectionB).
```
### Remove a User
```
Create a DELETE request to http://localhost:4000/remove/:user_id (replace :user_id with the actual user's name).
```
### Modify a User's Seat
```
Create a PUT request to http://localhost:4000/modify/:user_id/:new_seat (replace :user_id with the actual user's name and :new_seat with the new seat number).
```
