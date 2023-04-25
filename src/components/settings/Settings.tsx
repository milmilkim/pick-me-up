import { Ref, forwardRef } from "react";



const Settings = forwardRef((_, ref: Ref<HTMLDialogElement>) => {
  return (
    <dialog className='nes-dialog' ref={ref}>
      <form method='dialog'>
        <p className='title'>설정</p>
        <p>Alert: this is a dialog.</p>
        <menu className='dialog-menu'>
          <button className='nes-btn'>취소</button>
          <button className='nes-btn is-primary'>확인</button>
        </menu>
      </form>
    </dialog>
  );
});

export default Settings