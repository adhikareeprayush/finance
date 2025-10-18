const fmt = (news => {
  const possibleKeys = ['publishedDate','published_at','publishedAt','datePublished','pubDate','createdAt','time','timePublished','date'];
  let dateVal;
  for (const k of possibleKeys) {
    if (news && news[k] !== undefined && news[k] !== null) {
      dateVal = news[k];
      break;
    }
  }

  if (!dateVal && news && typeof news === 'object') {
    if (news.published && (news.published.date || news.publishedAt)) {
      dateVal = news.published.date || news.publishedAt;
    }
  }

  if (!dateVal) return 'Unknown date';

  let d;
  if (typeof dateVal === 'number') {
    d = new Date(dateVal < 1e12 ? dateVal * 1000 : dateVal);
  } else if (typeof dateVal === 'string') {
    d = new Date(dateVal);
    if (isNaN(d)) {
      const num = Number(dateVal);
      if (!isNaN(num)) {
        d = new Date(num < 1e12 ? num * 1000 : num);
      }
    }
  } else {
    d = new Date(dateVal);
  }

  if (isNaN(d)) return String(dateVal);

  return d.toLocaleString(undefined, { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
});

const samples = [
  {publishedDate:1697644800},
  {publishedAt:'2023-10-18T12:34:00Z'},
  {datePublished:1697644800000},
  {pubDate:'1697644800'},
  {createdAt:null},
  {published:{date:'2021-05-01T08:00:00Z'}},
  {},
];

samples.forEach(s => console.log(JSON.stringify(s), '=>', fmt(s)));
