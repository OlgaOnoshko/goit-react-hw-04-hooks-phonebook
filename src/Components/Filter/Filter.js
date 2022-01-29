import React from "react";
import PropTypes from "prop-types";

const ContactsFilter = ({ value, onChange }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default ContactsFilter;

ContactsFilter.propTypes = {
  // value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
