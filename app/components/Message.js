const Message = ({ message, isUser }) => {
    let containerClass = "bg-gray-50";
    if (isUser) {
      containerClass = "";
    }
  
    if (Array.isArray(message)) {
      message = message.join("");
    }
  
    if (!message || message === "") {
      return null;
    }
  
    return (
      <div
        className={`flex gap-x-4 rounded-md ${containerClass} py-5 px-5 mb-12`}
      >
        {isUser ? (
          <span className="text-xl sm:text-2xl" title="user">
            🥸
          </span>
        ) : (
          <span className="text-xl sm:text-2xl" title="AI">
            <img
              className="h-6 w-6"
              src="/static/mistral_logo.png"
              alt="mistral"
            />
          </span>
        )}
  
        <div className="flex flex-col text-sm sm:text-base flex-1 gap-y-4 mt-1">