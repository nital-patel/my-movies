document.addEventListener('DOMContentLoaded', () => {
  function sendInfoToDb(e) {
    $.ajax({
      url: '/movies',
      method: 'POST',
      data: {
        title: e.target.title.value,
        year: e.target.year.value,
        genre: e.target.genre.value
      },
      success: (res) => {
        console.log(res);
      }
    });
  }

  function getInfo(id) {
    $.ajax({
      url: `/movies/${id}`,
      success: (res) => addInfoToPage(res),
      error: (err) => console.log(err)
    });
  }

  function addMoviesToPage(res) {
    res.data.forEach((movie) => {
      $('#movies-container')
        .append($('<li>')
        .addClass('movie')
        .text(movie.title)
        .attr('data-id', movie.id));
    });

    $('.movie').each((index, elem) => {
      const id = $(elem).attr('data-id');

      $(elem).on('click', () => getInfo(id));
    })
  }

  function addInfoToPage(res) {
    const $container = $('#movie-clicked');
    $container.html(' ');
    $container.append($('<h3>').addClass('title').text(res.data.title));
    $container.append($('<span>').addClass('release-year').text(res.data.year));
  }

  $('#create').on('submit', (e) => sendInfoToDb(e));

  $.ajax({
    url: '/movies',
    success: (res) => addMoviesToPage(res),
    error: (err) => console.log(err),
  });
});
