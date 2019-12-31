import React from 'react';
import './form-input.styles.scss';
// ezeli chcemy miec label to musimy ja wrzucic do Propsa i wtedy
// sie wygeneruje
const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input className="form-input" onChange={handleChange} {...otherProps} />
		{label ? (
			<label
				className={`${
					otherProps.value.length ? 'shrink' : ''
				} form-input-label`}
			>
				{/* // tu jest tekst labelki jaka jest w props w komponencie wyzej */}
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
