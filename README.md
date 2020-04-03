# timbre_SDK

The idea for this repo is to be a centralised SDK for the Timbre API to allow us to separate the logic of interacting with the API from the front end apps.

No idea what I'm doing at the moment, but hopefully I can get it working / tested / built and then chuck it into the app, and who knows maybe we'll make a website some day and use it too?

## Structure

What I've got in mind is a core class Request Manager that can be extended into modules to interact with the different API endpoints - Bands, Users etc.

I'd like to add an error handler in there as well, but figure I'll get the thing working first.