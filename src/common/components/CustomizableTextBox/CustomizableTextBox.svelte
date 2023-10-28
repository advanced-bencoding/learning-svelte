<script lang="ts">
    import type { TextBoxVariant } from "./types";
    import "./styles.css";

    export let variant: TextBoxVariant;
    export let label: string | undefined = undefined;
    export let placeholder: string = "";
    export let textBoxStyle = undefined;
    export let textBoxType = "text";

    const cssClassForVariant = (variant: TextBoxVariant): string => {
        switch(variant){
            case "outlined":
                return "text-box--outlined";
            case "underlined":
                return "text-box--underlined";
            default:
                return "text-box--outlined";
        }
    }
</script>

<div class="textbox-container">
    {#if label}
        <span class="text-box__label">{label}</span>
    {/if}
    <div class="text-box-container__inner {cssClassForVariant(variant)}">
        <slot title="startAdornment" />
        <input class="textbox--unset textbox__input-field-styling " {placeholder} />
        <slot title="endAdornment" />
    </div>
</div>