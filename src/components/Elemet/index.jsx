import "./elemet.css"

function Elemet() {
    

    return (
        <div class="MuiFormControlLabel-root">
            <label class="MuiFormControlLabel-label">
                <span class="MuiButtonBase-root MuiIconButton-root MuiCheckbox-root MuiCheckbox-colorPrimary MuiIconButton-edgeEnd" tabindex="0" role="checkbox" aria-checked="true">
                    <span class="MuiIconButton-label">
                        <svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill="currentColor" d="M9 16.2l-4.2-4.2c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0L9 13.4l7.6-7.6c.4-.4 1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4l-9 9c-.4.4-1 .4-1.4 0z"></path>
                        </svg>
                    </span>
                    <input type="checkbox" class="MuiIconButton-input" checked=""/>
                </span>
                Checkbox Label
            </label>
        </div>

    )
}