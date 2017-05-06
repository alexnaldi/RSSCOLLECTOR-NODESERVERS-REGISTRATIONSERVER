'use strict'

const AbstractServer = require('abstract-server')

class RegistrationServer extends AbstractServer{
	constructor() {
		super();
	}
}

/*Initialization*/
var registrationServer = new RegistrationServer();

var serverInstance = registrationServer.getServerInstance();

var logger = registrationServer.getLoggerInstance();


/*Starting the server*/
serverInstance.listen(process.env.PORT, function () {
  logger.info(`${process.env.TYPE_ENV} listening on port ${process.env.PORT}!`);
});
