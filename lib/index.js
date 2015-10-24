import settings from './server.settings';
import server from './server';

server.connection(settings);

server.start(() => console.log(`Server listening on port ${settings.port}`));
