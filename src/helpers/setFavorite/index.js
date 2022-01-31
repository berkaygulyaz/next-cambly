const setFavorite = (data) => {
  let storageTutor = JSON.parse(localStorage.getItem("tutor"));

  if (storageTutor == null) {
    localStorage.setItem("tutor", JSON.stringify([data]));
  }
  let tutor = storageTutor.filter((e) => e.id == data.id);
  storageTutor.push(data);
  if (tutor.length > 0) {
    localStorage.setItem(
      "tutor",
      JSON.stringify(storageTutor.filter((e) => e.id !== data.id))
    );
  } else {
    localStorage.setItem("tutor", JSON.stringify(storageTutor));
  }
};

module.exports = setFavorite;