import result from 'lodash/result';
import {get, parseJson} from './fetcher';

const getAppstoreAppVersion = (identifier) => {
  const url = `http://itunes.apple.com/lookup?id=${identifier}&country=in`;
  return get(url).then(parseJson).then((d) => {
    const version = result(d, 'data.results[0].version');
    if (!version) {
      throw new Error('App not found!');
    }
    return version;
  });
};

module.exports = {
  getAppstoreAppVersion
};
