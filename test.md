# The Context

ModaResa's mission is to help companies in the fashion industry optimize their sales campaigns, with the main focus on agenda management. The primary goal is to create an agenda view that allows the company to manage appointments between clients (buyers) and company staff (vendors), including creating, editing, or deleting appointments.

## Data Schema

The data schema is currently simple:
- A vendor has only a name.
- A buyer has a name and the company's name.
- An appointment includes a title, a type (virtual or physical), a location (if physical), a host (the vendor), a client (the buyer), and start and end times.

# Technical Requirements

- The code must be written in TypeScript, with Node.js on the back end and preferably React.js on the front end (although you can choose a front-end framework you are more familiar with).
- Testing is required, with an emphasis on quality over quantity of features.

# Features

The required features include:
- A web page displaying the list of appointments.
- The ability to create, edit, and delete appointments with the specified details.
- Ensuring there are no conflicting appointments for the host or client.
