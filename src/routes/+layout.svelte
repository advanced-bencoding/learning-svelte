<script>
    import '../styles/global.css';
    import '../styles/layout.css';
    import Navbar from './components/Navbar.svelte';
</script>

<div class="app-container" >
    <Navbar />
    <div class="body-container">
        <slot />
    </div>
</div>
