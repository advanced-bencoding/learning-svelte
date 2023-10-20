<div class="app-container" >
    <nav class="header-nav flex-row">
        <div class="flex-row">
            <p>icon</p>
            <p>KIT.SVELTE.DEV</p>
        </div>
        <div class="flex-row">
            <p>searchbar</p>
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

<script>
    import '../styles/global.css'
    import '../styles/layout.css';
</script>