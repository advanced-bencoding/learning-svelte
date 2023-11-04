<script lang="ts">
    import type { TextBoxVariant } from "./types";
    import "./styles.css";

    export let variant: TextBoxVariant;
    export let label: string | undefined = undefined;
    export let placeholder: string = "";

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
        <slot name="startAdornment" />
        <input class="textbox--unset textbox__input-field-styling " {placeholder} />
        <slot name="endAdornment" />
    </div>
</div>