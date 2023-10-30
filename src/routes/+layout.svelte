<script>
    import '../styles/global.css';
    import '../styles/layout.css';
    import Drawer from '../common/components/Drawer/Drawer.svelte';
    import Navbar from '../common/components/Navbar/Navbar.svelte';
    import { drawerConfig } from './config';

</script>

<div class="app-container" >
    <Navbar />
    <Drawer {drawerConfig} />
    <div class="body-container">
        <slot />
    </div>
</div>
