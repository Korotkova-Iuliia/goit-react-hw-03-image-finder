const Modal = ({ url }) => {
  return (
    <div>
      <img src={url} />
    </div>
  );
};
export default Modal;
// alt = {};
// div class="overlay">
//   <div class="modal">
//     <img src="" alt="" />
//   </div>
// </div>

// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `);

// instance.show();
