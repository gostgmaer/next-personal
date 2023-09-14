import moment from 'moment';
import 'moment-duration-format';

// Export the calculateTimeGap function with maxGap parameter
export function calculateTimeGap(date1, date2, maxGap) {
  const momentDate1 = moment(date1, 'YYYY-MM-DD HH:mm:ss');
  const momentDate2 = date2?moment(date2, 'YYYY-MM-DD HH:mm:ss'):moment();

  // Calculate the time gap duration
  const duration = moment.duration(momentDate2.diff(momentDate1));

  // Calculate the years and months in the duration
  const years = duration.years();
  const months = duration.months();

  // Check if the duration exceeds the maximum allowable time gap in months
  if (duration.asMonths() > maxGap) {
    return `Time Gap exceeds the maximum allowable (${maxGap} months)`;
  }

  // Format the duration based on the maxGap value
  let formattedDuration = '';
  if (years > 0) {
    formattedDuration += `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    if (formattedDuration) {
      formattedDuration += ' ';
    }
    formattedDuration += `${months} month${months > 1 ? 's' : ''}`;
  }

  return `${formattedDuration}`;
}
