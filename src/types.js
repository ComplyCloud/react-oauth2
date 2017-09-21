import { shape, string } from 'prop-types';

export const oauth2ConfigPropTypes = {
  clientId: string.isRequired,
  tokenEndpoint: string.isRequired,
};

export const oauth2Shape = shape({
  accessToken: string,
});
