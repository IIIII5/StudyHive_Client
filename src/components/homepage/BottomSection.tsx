import { useState } from 'react';
import styled from 'styled-components';
import HomeModals from './HomeModals';
import RoomList from './RoomList';

function BottomSection() {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isJoinModalOpen, setJoinModalOpen] = useState(false);

  const openCreateModal = () => setCreateModalOpen(true);
  const closeCreateModal = () => setCreateModalOpen(false);

  const openJoinModal = () => setJoinModalOpen(true);
  const closeJoinModal = () => setJoinModalOpen(false);

  const handleCreate = (roomName: string) => {};

  const handleJoin = (code: string) => {};
  return (
    <BottomSectionStyle>
      <div className='content'>
        <div className='buttons'>
          <div className='icon' onClick={openCreateModal}>
            <img src='/assets/images/square-plus.png' alt='plus' width={100} />
            <h3>스터디 만들기</h3>
          </div>
          <div className='icon' onClick={openJoinModal}>
            <img
              src='/assets/images/square-arrow.png'
              alt='add-person'
              width={100}
            />
            <h3>스터디 입장</h3>
          </div>
        </div>
        <span>제목만 입력하면 간편하게 스터디룸을 만들 수 있어요.</span>
      </div>
      <RoomList />
      <HomeModals
        isOpen={isCreateModalOpen}
        onClose={closeCreateModal}
        type='create'
        onConfirm={handleCreate}
      />

      <HomeModals
        isOpen={isJoinModalOpen}
        onClose={closeJoinModal}
        type='join'
        onConfirm={handleJoin}
      />
    </BottomSectionStyle>
  );
}

const BottomSectionStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background-color: ${({ theme }) => theme.color_key};
  padding: 150px 0;
  position: relative;

  .content {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 80px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.color_bgWhite};
    box-shadow: 0 2px 15px rgba(78, 78, 78, 0.5);
    gap: 15px;

    span {
      color: ${({ theme }) => theme.color_textGray};
      font-size: ${({ theme }) => theme.fontSize_xxs};
    }

    .buttons {
      display: flex;
      gap: 80px;
      align-items: center;
    }

    .icon {
      display: flex;
      flex-direction: column;
      align-items: center;

      cursor: pointer;

      img {
        // 사진 자체 여백 조정
        padding-left: 10px;
      }
    }
  }
`;

export default BottomSection;
