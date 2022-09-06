import './index.scss';

export default function Button(props) { 
  return (
    <button disabled={props.disable} onClick={props.click}>{props.name}</button>
  );
}