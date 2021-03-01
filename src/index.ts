export default function setSequence(
  classNameToTrack: string,
  classNameWithAnimation: string
) {
  const elems = document.querySelectorAll("." + classNameToTrack);
  elems.forEach((el) => {
    el.classList.add(classNameWithAnimation);
  });
}
