// 점수 데이터
const scoreData = {
    '마/그/챌 1400 이상': { 탑: 56.9, 정글: 62.7, 미드: 61.6, 원딜: 58.6, 서폿: 56.9 },
    '마/그/챌 1300-1399': { 탑: 55.4, 정글: 61.1, 미드: 60, 원딜: 56.9, 서폿: 55.4 },
    '마/그/챌 1200-1299': { 탑: 53.9, 정글: 59.5, 미드: 58.3, 원딜: 55.2, 서폿: 53.9 },
    '마/그/챌 1100-1199': { 탑: 52.4, 정글: 57.8, 미드: 56.6, 원딜: 53.5, 서폿: 52.3 },
    '마/그/챌 1000-1099': { 탑: 50.9, 정글: 56.1, 미드: 54.9, 원딜: 51.8, 서폿: 50.8 },
    '마/그/챌 900-999': { 탑: 49.4, 정글: 54.4, 미드: 53.2, 원딜: 50.1, 서폿: 49.3 },
    '마/그/챌 800-899': { 탑: 47.9, 정글: 52.6, 미드: 51.4, 원딜: 48.4, 서폿: 47.7 },
    '마/그/챌 700-799': { 탑: 46.4, 정글: 50.8, 미드: 49.6, 원딜: 46.6, 서폿: 46.2 },
    '마/그/챌 600-699': { 탑: 44.9, 정글: 49, 미드: 47.8, 원딜: 44.8, 서폿: 44.7 },
    '마/그/챌 500-599': { 탑: 43.4, 정글: 47.2, 미드: 46, 원딜: 43, 서폿: 43.2 },
    '마/그/챌 400-499': { 탑: 41.9, 정글: 45.4, 미드: 44.2, 원딜: 41.2, 서폿: 41.7 },
    '마/그/챌 300-399': { 탑: 40.4, 정글: 43.6, 미드: 42.4, 원딜: 39.4, 서폿: 40.2 },
    '마/그/챌 200-299': { 탑: 38.9, 정글: 41.8, 미드: 40.5, 원딜: 37.7, 서폿: 38.7 },
    '마/그/챌 100-199': { 탑: 37.4, 정글: 40.1, 미드: 38.6, 원딜: 36, 서폿: 37.2 },
    '마/그/챌 0-99': { 탑: 36, 정글: 38.6, 미드: 36.7, 원딜: 34.2, 서폿: 35.6 },
    '다이아1 50-99': { 탑: 34.8, 정글: 37.2, 미드: 35.1, 원딜: 32.9, 서폿: 34.4 },
    '다이아1 0-49': { 탑: 33.8, 정글: 36.1, 미드: 34, 원딜: 31.9, 서폿: 33.6 },
    '다이아2 50-99': { 탑: 32.8, 정글: 34.9, 미드: 32.9, 원딜: 30.9, 서폿: 32.8 },
    '다이아2 0-49': { 탑: 31.8, 정글: 33.9, 미드: 31.8, 원딜: 29.9, 서폿: 32 },
    '다이아3 50-99': { 탑: 30.8, 정글: 32.9, 미드: 30.8, 원딜: 28.9, 서폿: 31.2 },
    '다이아3 0-49': { 탑: 29.9, 정글: 31.9, 미드: 29.8, 원딜: 27.9, 서폿: 30.4 },
    '다이아4 50-99': { 탑: 28.9, 정글: 30.7, 미드: 28.7, 원딜: 26.9, 서폿: 29.6 },
    '다이아4 0-49': { 탑: 28, 정글: 29.7, 미드: 27.7, 원딜: 25.9, 서폿: 28.8 },
    '에메랄드1 50-99': { 탑: 27.2, 정글: 28.7, 미드: 26.8, 원딜: 25, 서폿: 28 },
    '에메랄드1 0-49': { 탑: 26.3, 정글: 27.6, 미드: 25.7, 원딜: 24.1, 서폿: 27.1 },
    '에메랄드2 50-99': { 탑: 25.5, 정글: 26.6, 미드: 24.7, 원딜: 23.2, 서폿: 26.3 },
    '에메랄드2 0-49': { 탑: 24.8, 정글: 25.6, 미드: 23.7, 원딜: 22.3, 서폿: 25.5 },
    '에메랄드3 50-99': { 탑: 24.1, 정글: 24.6, 미드: 22.8, 원딜: 21.4, 서폿: 24.7 },
    '에메랄드3 0-49': { 탑: 23.3, 정글: 23.5, 미드: 21.8, 원딜: 20.5, 서폿: 23.9 },
    '에메랄드4 50-99': { 탑: 22.5, 정글: 22.5, 미드: 20.8, 원딜: 19.7, 서폿: 23.1 },
    '에메랄드4 0-49': { 탑: 21.8, 정글: 21.5, 미드: 19.8, 원딜: 18.9, 서폿: 22.4 },
    '플래티넘1 50-99': { 탑: 21.1, 정글: 20.6, 미드: 19, 원딜: 18.2, 서폿: 21.8 },
    '플래티넘1 0-49': { 탑: 20.4, 정글: 19.5, 미드: 18.1, 원딜: 17.5, 서폿: 21 },
    '플래티넘2 50-99': { 탑: 19.7, 정글: 18.5, 미드: 17.2, 원딜: 16.8, 서폿: 20.2 },
    '플래티넘2 0-49': { 탑: 19, 정글: 17.5, 미드: 16.3, 원딜: 16.1, 서폿: 19.5 },
    '플래티넘3 50-99': { 탑: 18.3, 정글: 16.5, 미드: 15.4, 원딜: 15.4, 서폿: 18.8 },
    '플래티넘3 0-49': { 탑: 17.6, 정글: 15.5, 미드: 14.6, 원딜: 14.7, 서폿: 18.1 },
    '플래티넘4': { 탑: 16.9, 정글: 14.6, 미드: 13.8, 원딜: 14, 서폿: 17.4 },
    '골드1': { 탑: 16.4, 정글: 13.7, 미드: 12.9, 원딜: 13.2, 서폿: 16.6 },
    '골드2': { 탑: 15.3, 정글: 12.5, 미드: 11.8, 원딜: 12.2, 서폿: 15.8 },
    '골드3': { 탑: 14.3, 정글: 11.4, 미드: 10.7, 원딜: 11.2, 서폿: 15 },
    '골드4': { 탑: 13.4, 정글: 10.3, 미드: 9.7, 원딜: 10.4, 서폿: 14.2 },
    '실버1': { 탑: 12.6, 정글: 9.2, 미드: 8.7, 원딜: 9.6, 서폿: 13.4 },
    '실버2': { 탑: 11.8, 정글: 8.1, 미드: 7.7, 원딜: 8.8, 서폿: 12.7 },
    '실버3': { 탑: 11, 정글: 7, 미드: 6.8, 원딜: 8, 서폿: 12.4 },
    '실버4': { 탑: 10.2, 정글: 5.9, 미드: 5.9, 원딜: 7.2, 서폿: 11.3 },
    '브론즈1': { 탑: 9.4, 정글: 4.8, 미드: 5, 원딜: 6.4, 서폿: 10.6 },
    '브론즈2': { 탑: 8.6, 정글: 3.7, 미드: 4.1, 원딜: 5.6, 서폿: 9.9 },
    '브론즈3': { 탑: 7.8, 정글: 2.6, 미드: 3.2, 원딜: 4.8, 서폿: 9.2 },
    '브론즈4 이하': { 탑: 7, 정글: 1.5, 미드: 2.3, 원딜: 4, 서폿: 8.5 }
};

// 팀 멤버 데이터
let teamMembers = [
    { id: 1, position: '탑', rank: '', score: 0 },
    { id: 2, position: '정글', rank: '', score: 0 },
    { id: 3, position: '미드', rank: '', score: 0 },
    { id: 4, position: '원딜', rank: '', score: 0 },
    { id: 5, position: '서폿', rank: '', score: 0 }
];

// 포지션별 아이콘
const positionIcons = {
    '탑': '🛡️',
    '정글': '🌲',
    '미드': '⚡',
    '원딜': '🏹',
    '서폿': '💙'
};

// 랭크별 색상 클래스
function getRankColorClass(rank) {
    if (rank.includes('마/그/챌')) return 'rank-challenger';
    if (rank.includes('다이아')) return 'rank-diamond';
    if (rank.includes('에메랄드')) return 'rank-emerald';
    if (rank.includes('플래티넘')) return 'rank-platinum';
    if (rank.includes('골드')) return 'rank-gold';
    if (rank.includes('실버')) return 'rank-silver';
    if (rank.includes('브론즈')) return 'rank-bronze';
    return '';
}

// 팀 멤버 업데이트
function updateMember(id, field, value) {
    const member = teamMembers.find(m => m.id === id);
    if (member) {
        member[field] = value;
        if (field === 'rank' && value && scoreData[value]) {
            member.score = scoreData[value][member.position];
        } else if (field === 'rank' && !value) {
            member.score = 0;
        }
        updateDisplay();
    }
}

// 디스플레이 업데이트
function updateDisplay() {
    const totalScore = teamMembers.reduce((sum, member) => sum + member.score, 0);
    
    // 총점 업데이트
    document.getElementById('totalScoreDisplay').textContent = totalScore.toFixed(1);
    
    // 팀원 점수 표시 업데이트
    teamMembers.forEach(member => {
        const scoreElement = document.getElementById(`score-${member.id}`);
        if (scoreElement) {
            const badge = scoreElement.querySelector('.score-badge');
            if (member.score > 0) {
                badge.textContent = member.score.toFixed(1);
                badge.className = `score-badge ${getRankColorClass(member.rank)}`;
            } else {
                badge.textContent = '-';
                badge.className = 'score-badge empty';
            }
        }
    });
    
    // 팀 상태 업데이트
    const teamStatus = document.getElementById('teamStatus');
    const scoreBreakdown = document.getElementById('scoreBreakdown');
    
    if (totalScore > 0 && teamMembers.every(member => member.rank)) {
        // 모든 멤버가 선택된 경우에만 상태 표시
        teamStatus.style.display = 'block';
        
        const isPossible = totalScore <= 100;
        teamStatus.innerHTML = `
            <div class="status-card ${isPossible ? 'possible' : 'impossible'}">
                <div class="status-header">
                    <div class="status-indicator ${isPossible ? 'green' : 'red'}"></div>
                    <span class="status-title ${isPossible ? 'green' : 'red'}">
                        ${isPossible ? '팀 구성 가능' : '팀 구성 불가능'}
                    </span>
                </div>
                <p class="status-message ${isPossible ? 'green' : 'red'}">
                    ${isPossible 
                        ? '총점이 100점 이하로 균형잡힌 팀입니다!' 
                        : `총점이 100점을 초과했습니다. (${(totalScore - 100).toFixed(1)}점 초과)`
                    }
                </p>
            </div>
        `;
    } else {
        teamStatus.style.display = 'none';
    }
    
    // 점수 breakdown 업데이트
    if (totalScore > 0) {
        scoreBreakdown.style.display = 'grid';
        scoreBreakdown.innerHTML = teamMembers.map(member => `
            <div class="breakdown-item">
                <div class="breakdown-label">${member.position}</div>
                <div class="breakdown-score">
                    ${member.score > 0 ? member.score.toFixed(1) : '-'}
                </div>
            </div>
        `).join('');
    } else {
        scoreBreakdown.style.display = 'none';
    }
}

// 팀 멤버 렌더링
function renderTeamMembers() {
    const container = document.getElementById('teamMembers');
    const ranks = Object.keys(scoreData);
    
    container.innerHTML = teamMembers.map(member => `
        <div class="member-card">
            <div class="member-content">
                <div class="member-position">
                    <div class="position-icon">${positionIcons[member.position]}</div>
                    <div class="position-info">
                        <h3>${member.position}</h3>
                        <div class="position-label">포지션</div>
                    </div>
                </div>
                
                <div class="rank-select">
                    <select onchange="updateMember(${member.id}, 'rank', this.value)" value="${member.rank}">
                        <option value="">랭크 선택</option>
                        ${ranks.map(rank => `
                            <option value="${rank}" ${member.rank === rank ? 'selected' : ''}>${rank}</option>
                        `).join('')}
                    </select>
                </div>
                
                <div class="score-display" id="score-${member.id}">
                    <div class="score-badge empty">-</div>
                </div>
            </div>
        </div>
    `).join('');
}

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    renderTeamMembers();
    updateDisplay();
    
    // Lucide 아이콘 다시 초기화 (동적 콘텐츠를 위해)
    if (window.lucide) {
        lucide.createIcons();
    }
});
