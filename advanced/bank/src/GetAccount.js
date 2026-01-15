import { useState } from "react";

function GetAccount(){

        const urlBase = "https://695f03af7f037703a8128fbf.mockapi.io/api/v1/Account"
        const [accountID, setAccountID] = useState("")
        
        var Submit = function() {
            let req = fetch(urlBase+"/"+accountID)
            let res = req.json()
            setAccountID(res)
            console.log(accountID)
        }

    return (
        <>
            <input placeholder="Input desired account ID"
                value = {accountID}
                onChange = {Submit}
            ></input>

            <button onClick={Submit}>Submit</button>

        </>
    )
}

export default GetAccount