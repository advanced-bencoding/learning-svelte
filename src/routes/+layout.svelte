<script>
    import '../styles/global.css'
    import '../styles/layout.css';
    import CustomizableTextBox from '../common/components/CustomizableTextBox/CustomizableTextBox.svelte';
</script>

<div class="app-container" >
    <nav class="header-nav flex-row">
        <div class="flex-row">
            <p>icon</p>
            <p>KIT.SVELTE.DEV</p>
        </div>
        <div class="flex-row">
            <CustomizableTextBox variant="outlined"/>
        </div>
        <div class="flex-row">
            <p>Docs</p>
            <p>Tutorial</p>
            <p>Svelte</p>
            <div class="flex-row header-nav__icons">
                icons
            </div>
        </div>
    </nav>
    <div>
        <slot />
    </div>
</div>
