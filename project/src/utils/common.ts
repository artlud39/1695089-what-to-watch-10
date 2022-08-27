import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const ONE_HOUR = 360;

const COMMENT_DATE_FORMAT = 'MMMM DD, YYYY';

enum DurationTemplate {
  MinutesSeconds = 'm[:] s',
  HoursMinutesSeconds = 'H[:] m[:] s',
  HoursMinutes = 'H[h] m[m]'
}

export const RatingName = [
  {
    min: 0,
    max: 3,
    name: 'Bad',
  },
  {
    min: 3,
    max: 5,
    name: 'Normal',
  },
  {
    min: 5,
    max: 8,
    name: 'Good',
  },
  {
    min: 8,
    max: 10,
    name: 'Very Good',
  },
];

const AWESOME_NAME = 'Awesome';

enum TimeMetric {
  Second = 'seconds',
  Minute = 'minutes',
}

export const humanizeCommentDate = (date: string): string =>
  dayjs(date).format(COMMENT_DATE_FORMAT);

export const humanizeDuration = (runtime: number): string => {
  const timeDuration = dayjs.duration(runtime, TimeMetric.Minute);
  return timeDuration.format(DurationTemplate.HoursMinutes);
};

export const humanizeLastTime = (runtime: number): string => {
  const timeDuration = dayjs.duration(runtime, TimeMetric.Second);

  if ((runtime / ONE_HOUR) < 1) {
    return timeDuration.format(DurationTemplate.MinutesSeconds);
  }

  return timeDuration.format(DurationTemplate.HoursMinutesSeconds);
};

export const getRatingName = (rating: number): string => {
  for (const item of RatingName) {
    if (rating >= item.min && rating < item.max) {
      return item.name;
    }
  }

  return AWESOME_NAME;
};
