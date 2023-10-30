import React from 'react'


const FormLinks = ({ links, setForm }) => {

    return (
      <div className="form__links-wrapper">
        {links.map((link, index) => (

          <React.Fragment key={index}>
            {index > 0 && <span>·</span>}
            <a onClick={() => setForm(link.form)} className="a">
              {link.text}
            </a>
          </React.Fragment>
          
        ))}
      </div>
    );
  }

export default FormLinks;