import React, { useRef } from 'react';

type CheckBoxProps = {
	checked: boolean;
	onChange: (checked: boolean) => void;
	label?: string;
	id?: string;
	disabled?: boolean;
	ariaLabel?: string;
	tabIndex?: number;
};

const CheckBox: React.FC<CheckBoxProps> = ({
	checked,
	onChange,
	label,
	id,
	disabled = false,
	ariaLabel,
	tabIndex
}) => {
	const inputRef = useRef<HTMLInputElement>(null);

	// Keyboard navigation: Space/Enter toggles
	const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
		if (disabled) return;
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault();
			onChange(!checked);
		}
	};

	return (
		<label
			className={`inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
			htmlFor={id}
		>
			<input
				ref={inputRef}
				id={id}
				type="checkbox"
				checked={checked}
				onChange={e => onChange(e.target.checked)}
				disabled={disabled}
				aria-checked={checked}
				aria-label={ariaLabel || label}
				tabIndex={-1}
				className="hidden"
			/>
			<span
				role="checkbox"
				aria-checked={checked}
				aria-label={ariaLabel || label}
				tabIndex={typeof tabIndex === 'number' ? tabIndex : 0}
				onKeyDown={handleKeyDown}
				onClick={() => !disabled && onChange(!checked)}
				aria-disabled={disabled}
				className={`relative inline-block w-9 h-6 rounded-full border-2 border-black transition-colors duration-200 outline-none ${checked ? 'bg-black' : 'bg-white'}`}
			>
				<span
					className={`absolute top-0.5 transition-all duration-200 w-5 h-5 rounded-full ${checked ? 'left-4 bg-white' : 'left-0.5 bg-black'}`}
				/>
			</span>
			{label && (
				<span className="ml-2 select-none">{label}</span>
			)}
		</label>
	);
};

export default CheckBox;
