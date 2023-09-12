import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 10px;
`
export const ResultContainer = styled.div`
  border: 2px solid #ffffff;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
`
export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Option = styled.p`
  font-size: 22px;
  font-family: 'Bree Serif';
  font-weight: 500;
  color: #ffffff;
  padding-bottom: 20px;
  margin: 30px;
`
export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 12px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: 10px;
`
export const ScorePhrase = styled.p`
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
`
export const ScoreNumber = styled.p`
  font-size: 32px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #223a5f;
  padding-left: 12px;
`
export const GameViewContainer = styled.div`
  width: 65%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const GameOptionsList = styled.ul`
  padding-left: 0px;
  margin-left: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  max-width: 480px;
  flex-wrap: wrap;
`
export const GameResultViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  justify-content: center;
`
export const SelectedOptionsContainer = styled.div`
  display: flex;
  width: 80%;
  max-width: 600px;
  justify-content: space-between;
`
export const GameUserOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const GameParticipantText = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
`
export const GameParticipantChoiceImage = styled.img`
  width: 170px;
  height: 170px;
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Roboto';
  text-align: center;
`
export const PlayAgainButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  align-self: center;
`
export const PopupContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 15px;
  margin-top: -55px;
  justify-content: center;
`
export const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  background-color: transparent;
`
export const PopUpImage = styled.img`
  width: 90%;
  align-self: center;
`
export const PopUpBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  font-weight: 500;
`
export const TriggerButton = styled.button`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Roboto';
  color: #223a5f;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
`
