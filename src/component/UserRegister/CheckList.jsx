import React from 'react'
import PasswordChecklist from "react-password-checklist"

const CheckList = ({password, cpassword}) => {
  return (
    <div>
  <PasswordChecklist className='Checklist'
				rules={["minLength","specialChar","number","capital","match"]}
				minLength={8}
				value={password}
				valueAgain={cpassword}
				messages={{
                    minLength: "The password has more than 8 characters.",
                    specialChar: "The password contains special characters.",
                    number: "The password contains a number.",
                    capital: "The password contains an uppercase letter.",
                    match: "The passwords must match.",
                  }}
                  
			/>
    </div>
  )
}

export default CheckList