export function InputField({label, name, value, onChange,error, type="text",placeholder, tambahan}){
    return(
        <div className="input-css">
            <p>{label}</p>

            <input
             type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}

             />

             {error && (
                <p style={{ color: "red", fontSize: "10px" }}>
                {error}
                </p>
            )}

            <div>{tambahan}</div>

        </div>

        
    )
}
