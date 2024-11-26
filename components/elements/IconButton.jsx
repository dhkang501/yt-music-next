import React from 'react';

// onClickIcon = () => {} : 기본값으로 빈 함수 전달, onClickIcon null일 경우 오류 방지
const IconButton = ({icon, onClickIcon = () => {}}) => {
  return (
    <div
      onClick={onClickIcon}
      className="flex justify-center items-center w-[36px] h-[36px] hover:bg-[rgba(144,144,144,0.45)] rounded-full cursor-pointer">
      {icon}
    </div>
  );
};

export default IconButton;
