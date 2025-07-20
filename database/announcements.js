const announcementsData = [
    {
        type: 'event',
        title: 'SUMMER POOL PARTY',
        description: 'Kick off some relaxation with us at the UMiami pool. Come hang out, swim, grab some sun, or just relax.',
        date: '2025-07-20',
        time: '12:30 PM – 5:00 PM',
        location: 'University of Miami Pool',
        image: 'https://images.unsplash.com/photo-1506359585186-16ff29581308?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'COCOA & CRAM',
        description: 'Need to study for Symposium? Join us in the Eaton lobby for a Cocoa and Cram study session.',
        date: '2025-07-20',
        time: '6:00 PM – 8:00 PM',
        location: 'Eaton Lobby',
        image: 'https://images.unsplash.com/photo-1581264247263-5b1afa9dc0b1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'DRAKE VS. KENDRICK LISTENING PARTY',
        description: 'Close out your night with a real deal battle: Kendrick vs. Drake listening party.',
        date: '2025-07-20',
        time: '8:00 PM – 10:00 PM',
        location: 'Eaton 3rd Floor Lounge',
        image: 'https://images.unsplash.com/photo-1622023899195-145dd7db2aab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'COCONUT GROVE EXCURSION',
        description: 'Explore Miami’s Coconut Grove neighborhood with a visit alongside your Fellows.',
        date: '2025-07-21',
        time: '4:45 PM',
        location: 'Meet in the Lobby',
        image: 'https://images.unsplash.com/photo-1595111571848-fdf33cfb6cff?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'STAFF VS. SCHOLARS BASKETBALL',
        description: 'Sign up to face off against staff in the Staff vs. Scholars Basketball Game.',
        date: '2025-07-21',
        time: '6:00 PM – 8:00 PM',
        location: 'Campus Gym',
        image: 'https://plus.unsplash.com/premium_photo-1723867496907-63ae4781603f?q=80&w=1061&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'LOVE AND BASKETBALL MOVIE NIGHT',
        description: 'End the night with the all-time classic, "Love and Basketball."',
        date: '2025-07-21',
        time: '8:00 PM – 10:00 PM',
        location: 'Campus Lounge',
        image: 'https://i.ibb.co/7txkfBWB/love-basketball.png',
        link: null 
    },
    {
        type: 'event',
        title: 'THRIVE PROM',
        description: 'Enjoy a magical evening dancing and singing alongside other Scholars.',
        date: '2025-07-22',
        time: '5:00 PM – 9:30 PM',
        location: 'Event Hall',
        image: 'https://images.unsplash.com/photo-1630395822970-acd6a691d97e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'BINGO NIGHT',
        description: 'Let your competitive side out and join us for Bingo!',
        date: '2025-07-23',
        time: '6:00 PM – 7:00 PM',
        location: 'Community Lounge',
        image: 'https://images.unsplash.com/photo-1651359729278-7fadd8d93152?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'DISNEY KARAOKE NIGHT',
        description: 'Relax and rock out in a night of singing your favorite Disney songs.',
        date: '2025-07-23',
        time: '7:00 PM – 9:00 PM',
        location: 'Event Room',
        image: 'https://images.unsplash.com/photo-1722816738620-5eb5fc059487?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'SURPRISE MOVIE NIGHT',
        description: 'Close the night with a surprise movie hosted by your awesome SD and ASDs.',
        date: '2025-07-23',
        time: '9:00 PM – 11:00 PM',
        location: 'Movie Room',
        image: 'https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9?q=80&w=1209&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'COLDSTONE EXCURSION',
        description: 'Cool down with your fellows with a ColdStone Ice Cream excursion.',
        date: '2025-07-24',
        time: '6:00 PM – 9:00 PM',
        location: 'ColdStone Creamery',
        image: 'https://images.unsplash.com/photo-1502174832274-bc176e52765a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'COLLEGE NETWORKING NIGHT',
        description: 'Celebrate your accomplishments and share your future plans for the fall.',
        date: '2025-07-24',
        time: '7:00 PM – 9:00 PM',
        location: 'Networking Lounge',
        image: 'https://images.unsplash.com/photo-1524868857876-218cafbdda8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    },
    {
        type: 'event',
        title: 'DIY AND GOODBYE',
        description: 'Close out the summer with some final memories. Make friendship bracelets and say farewell.',
        date: '2025-07-25',
        time: '5:00 PM – 9:00 PM',
        location: 'Main Hall',
        image: 'https://images.unsplash.com/photo-1721934175045-54856f1087cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        link: null 
    }
];
