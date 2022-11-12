<script>
    import FacebookIcon from './facebook-icon.svelte'
    import TwitterIcon from './twitter-icon.svelte'
    import YouTubeIcon from './you-tube-icon.svelte'
</script>

<footer class="p-10 footer bg-primary text-primary-content footer-center">
<div class="grid grid-flow-col gap-4">
    <a class="link link-hover" href="/projects">Portfolio</a>
    <a class="link link-hover" href="/posts">Blog</a>
    <a class="link link-hover" href="/about">About</a>
</div>
<div>
    <div class="grid grid-flow-col gap-4">
    <a href="https://twitter.com/shaunmulligan9">
        <TwitterIcon />
    </a>
    <a href="https://www.youtube.com/channel/UCmcMzRdQbL5EHAoZSs-80UA">
        <YouTubeIcon />
    </a>
    <!-- TODO: Put LinkedIn here -->
    <!-- <a href="https://facebook.com">
        <FacebookIcon />
    </a> -->
    </div>
</div>
<div>
    <p>
    Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved
    by ME
    </p>
</div>
</footer>