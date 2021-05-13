export const ExtractDate = (date) => {
  let day, month, year;

  let result = date.match('[0-9]{2}([-/ .])[0-9]{2}[-/ .][0-9]{4}');
  if (null != result) {
    let dateSplitted = result[0].split(result[1]);
    day = dateSplitted[0];
    month = dateSplitted[1];
    year = dateSplitted[2];
  }

  result = date.match('[0-9]{4}([-/ .])[0-9]{2}[-/ .][0-9]{2}');
  if (null != result) {
    let dateSplitted = result[0].split(result[1]);
    day = dateSplitted[2];
    month = dateSplitted[1];
    year = dateSplitted[0];
  }

  if (month > 12) {
    let aux = day;
    day = month;
    month = aux;
  }

  return month + '/' + day + '/' + year;
};
