function catchErrors(error, displayError){
    let errorMsg;
    if (error.response){
        // the request was made and server responded with non 2XX status code
        errorMsg = error.response.data;
        console.error("Error Response: ", errorMsg)

        //for Cloudinary image uploads
        if (error.response.data.error){
            errorMsg = error.response.data.error.message;
        }

    } else if (error.request){
        //request was made but no response was receieved
        errorMsg = error.request;
        console.error("Error Request: ", errorMsg)
    } else{
        // Something else happened, which triggered an error
        errorMsg = error.message;
        console.error("Error Message: ", errorMsg)

    }

    displayError(errorMsg);
}

export default catchErrors;