
type PropsTypes = {
  message: string | boolean
}


const ErrorMessage = ({message}:PropsTypes) => {
    return (
      <div>
        <span>{message}</span>
      </div>
    );
  }

  export default ErrorMessage