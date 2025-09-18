'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { 
  FaPlay, 
  FaPause, 
  FaBookOpen, 
  FaDownload, 
  FaShare, 
  FaBookmark,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaUser,
  FaStar,
  FaCheckCircle,
  FaList,
  FaComments
} from 'react-icons/fa';
import VideoPlayer from '../../../../components/VideoPlayer';

export default function CourseVideoPage() {
  const params = useParams();
  const courseId = params.id;
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [completedVideos, setCompletedVideos] = useState(new Set());
  const [showSidebar, setShowSidebar] = useState(true);
  const [progress, setProgress] = useState(0);

  // Mock course data
  const course = {
    id: courseId,
    title: 'Complete Web Development Bootcamp',
    instructor: 'John Doe',
    rating: 4.8,
    students: 1250,
    duration: '45 hours',
    level: 'Beginner',
    description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js.',
    thumbnail: '/api/placeholder/800/450',
    videos: [
      {
        id: 1,
        title: 'Introduction to Web Development',
        description: 'Get started with web development fundamentals',
        duration: '15:30',
        videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4',
        thumbnail: '/api/placeholder/800/450',
        isPreview: true
      },
      {
        id: 2,
        title: 'HTML Basics and Structure',
        description: 'Learn HTML tags, elements, and document structure',
        duration: '22:45',
        videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4',
        thumbnail: '/api/placeholder/800/450',
        isPreview: false
      },
      {
        id: 3,
        title: 'CSS Styling and Layout',
        description: 'Master CSS for beautiful and responsive designs',
        duration: '28:15',
        videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4',
        thumbnail: '/api/placeholder/800/450',
        isPreview: false
      },
      {
        id: 4,
        title: 'JavaScript Fundamentals',
        description: 'Learn JavaScript programming basics',
        duration: '35:20',
        videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_10mb.mp4',
        thumbnail: '/api/placeholder/800/450',
        isPreview: false
      },
      {
        id: 5,
        title: 'React Components and State',
        description: 'Build interactive UIs with React',
        duration: '42:10',
        videoSrc: 'https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_20mb.mp4',
        thumbnail: '/api/placeholder/800/450',
        isPreview: false
      }
    ],
    sections: [
      {
        id: 1,
        title: 'Getting Started',
        videos: [1, 2],
        duration: '38:15'
      },
      {
        id: 2,
        title: 'Frontend Development',
        videos: [3, 4],
        duration: '63:35'
      },
      {
        id: 3,
        title: 'React Development',
        videos: [5],
        duration: '42:10'
      }
    ]
  };

  const currentVideo = course.videos[currentVideoIndex];

  // Handle video progress
  const handleVideoProgress = (currentTime, duration) => {
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);
  };

  // Handle video completion
  const handleVideoComplete = () => {
    setCompletedVideos(prev => new Set([...prev, currentVideo.id]));
  };

  // Navigate to next/previous video
  const navigateVideo = (direction) => {
    if (direction === 'next' && currentVideoIndex < course.videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    } else if (direction === 'prev' && currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  // Select specific video
  const selectVideo = (index) => {
    setCurrentVideoIndex(index);
  };

  // Calculate overall progress
  const overallProgress = (completedVideos.size / course.videos.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.history.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{course.title}</h1>
                <p className="text-sm text-gray-600">by {course.instructor}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaStar className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{course.rating}</span>
                <span className="text-sm text-gray-500">({course.students} students)</span>
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <FaShare className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <FaBookmark className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          {/* Main Video Area */}
          <div className={`transition-all duration-300 ${showSidebar ? 'flex-1' : 'w-full'}`}>
            {/* Video Player */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
              <VideoPlayer
                videoSrc={currentVideo.videoSrc}
                title={currentVideo.title}
                description={currentVideo.description}
                thumbnail={currentVideo.thumbnail}
                onProgress={handleVideoProgress}
                onComplete={handleVideoComplete}
                className="aspect-video"
              />
            </div>

            {/* Video Info */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentVideo.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{currentVideo.description}</p>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <FaClock className="w-4 h-4" />
                      <span>{currentVideo.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <FaUser className="w-4 h-4" />
                      <span>{course.instructor}</span>
                    </div>
                    {currentVideo.isPreview && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Preview
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors">
                    <FaDownload className="w-4 h-4 inline mr-2" />
                    Download
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Video Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-violet-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => navigateVideo('prev')}
                  disabled={currentVideoIndex === 0}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    currentVideoIndex === 0
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <FaChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="text-sm text-gray-600">
                  {currentVideoIndex + 1} of {course.videos.length} videos
                </div>

                <button
                  onClick={() => navigateVideo('next')}
                  disabled={currentVideoIndex === course.videos.length - 1}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    currentVideoIndex === course.videos.length - 1
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-violet-600 text-white hover:bg-violet-700'
                  }`}
                >
                  <span>Next</span>
                  <FaChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">About This Course</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">{course.videos.length}</div>
                  <div className="text-sm text-gray-600">Videos</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">{course.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">{course.level}</div>
                  <div className="text-sm text-gray-600">Level</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">{Math.round(overallProgress)}%</div>
                  <div className="text-sm text-gray-600">Complete</div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          {showSidebar && (
            <div className="w-80 bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Course Content</h3>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                >
                  <FaChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Overall Progress */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span>Course Progress</span>
                  <span>{Math.round(overallProgress)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${overallProgress}%` }}
                  />
                </div>
              </div>

              {/* Course Sections */}
              <div className="space-y-4">
                {course.sections.map((section, sectionIndex) => (
                  <div key={section.id} className="border border-gray-200 rounded-lg">
                    <div className="p-3 bg-gray-50 border-b border-gray-200">
                      <h4 className="font-semibold text-gray-900">{section.title}</h4>
                      <p className="text-sm text-gray-600">{section.duration}</p>
                    </div>
                    
                    <div className="p-2">
                      {section.videos.map((videoId, videoIndex) => {
                        const video = course.videos.find(v => v.id === videoId);
                        const globalIndex = course.videos.findIndex(v => v.id === videoId);
                        const isCompleted = completedVideos.has(videoId);
                        const isCurrent = globalIndex === currentVideoIndex;
                        
                        return (
                          <div
                            key={videoId}
                            onClick={() => selectVideo(globalIndex)}
                            className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                              isCurrent
                                ? 'bg-violet-100 border border-violet-200'
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex-shrink-0">
                              {isCompleted ? (
                                <FaCheckCircle className="w-4 h-4 text-green-500" />
                              ) : (
                                <FaPlay className="w-4 h-4 text-gray-400" />
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium truncate ${
                                isCurrent ? 'text-violet-900' : 'text-gray-900'
                              }`}>
                                {video.title}
                              </p>
                              <p className="text-xs text-gray-500">{video.duration}</p>
                            </div>
                            
                            {video.isPreview && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                Preview
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resources */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Resources</h4>
                <div className="space-y-2">
                  <button className="w-full flex items-center space-x-2 p-2 text-left hover:bg-gray-50 rounded transition-colors">
                    <FaBookOpen className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Course Materials</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 p-2 text-left hover:bg-gray-50 rounded transition-colors">
                    <FaComments className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Discussion Forum</span>
                  </button>
                  <button className="w-full flex items-center space-x-2 p-2 text-left hover:bg-gray-50 rounded transition-colors">
                    <FaList className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">Assignments</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar Toggle Button */}
          {!showSidebar && (
            <button
              onClick={() => setShowSidebar(true)}
              className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-violet-600 text-white p-3 rounded-l-lg shadow-lg hover:bg-violet-700 transition-colors"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
