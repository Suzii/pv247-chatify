import {IChannel} from '../models/IChannel';
import * as Immutable from 'immutable';
import * as uuid from 'uuid';

export const getInitialChannels = (): Immutable.List<IChannel> =>  Immutable.List([
    { id: uuid(), name: 'Channel 1' },
    { id: uuid(), name: 'Channel 2' },
    { id: uuid(), name: 'Channel 3' }
]);
