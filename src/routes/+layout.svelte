<script>
    import '../styles/global.css';
    import '../styles/layout.css';
  import Drawer from './components/Drawer/Drawer.svelte';
    import Navbar from './components/Navbar/Navbar.svelte';
</script>

<div class="app-container" >
    <Navbar />
    <Drawer />
    <div class="body-container">
        <slot />
    </div>
</div>
