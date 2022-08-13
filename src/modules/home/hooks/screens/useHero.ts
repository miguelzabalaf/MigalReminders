import moment from 'moment';

export const useHome = () => {
  const getDay = () => new Date().getDate();
  const getDayName = () => moment(new Date()).format('ddd').toUpperCase();
  const getMonth = () => moment(new Date()).format('MMM');
  const getYear = () => new Date().getFullYear();

  return {
    getDay,
    getDayName,
    getMonth,
    getYear,
  };
};
